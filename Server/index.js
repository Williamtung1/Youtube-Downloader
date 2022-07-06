const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
app.use(express.static(__dirname + '/../'));
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.get('/download', (req,res) => {
    let URL = req.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(URL, {
        format: 'mp4'
    }).pipe(res);
});