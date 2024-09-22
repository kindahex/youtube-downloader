import express from 'express';
import ytdl from 'ytdl-core';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

// Download video
app.get('/download/video', async (req, res) => {
  const videoUrl = req.query.url as string;

  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).send('Invalid YouTube URL');
  }

  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(videoUrl, { format: 'mp4' }).pipe(res);
});

// Download audio
app.get('/download/audio', async (req, res) => {
  const videoUrl = req.query.url as string;

  if (!ytdl.validateURL(videoUrl)) {
    return res.status(400).send('Invalid YouTube URL');
  }

  res.header('Content-Disposition', 'attachment; filename="audio.mp3"');
  ytdl(videoUrl, { filter: 'audioonly', format: 'mp3' }).pipe(res);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
