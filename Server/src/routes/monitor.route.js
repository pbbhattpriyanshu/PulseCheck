import { Router } from 'express';

const router = Router();

router.post('/monitor', (req, res) => {
    res.send('PulseCheck is running!');
});

router.get('/status', (req, res) => {
    res.send('PulseCheck is running!');
});

export default router;