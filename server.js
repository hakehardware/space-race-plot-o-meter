import express from 'express';
import { spacePledged } from '@autonomys/auto-consensus';
import { activate } from '@autonomys/auto-utils';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

let api;

// Activate the API on server start
(async () => {
  api = await activate({ networkId: 'mainnet'});
})();

// Serve static files from the 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get spacePledged data
app.get('/api/space-pledge', async (req, res) => {
  try {
    // Set headers to prevent caching
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    
    const currentSpacePledged = await spacePledged(api);
    if(!currentSpacePledged) return;
    res.json({ spacePledged: currentSpacePledged.toString() }); // Send as string to handle BigInt
  } catch (error) {
    console.error('Error fetching space pledged:', error);
    res.status(500).json({ error: 'Failed to fetch space pledge' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
