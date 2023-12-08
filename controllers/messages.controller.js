const path = require('path');

function getMessages(req, res){
    res.render('messages', {
        title: 'Messages to my Friends',
        friend: 'Elon Musk',
    });
    
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.webp'));
   
}

function postMessage(req, res){
    console.log('Updating API!');
}

module.exports = {
    getMessages,
    postMessage,
}