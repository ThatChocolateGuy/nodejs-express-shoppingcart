var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {
    useMongoClient: true
}, (err) => {
    if(err) console.error(err);
    else console.log('Connected Successfully');
});

var products = [
    new Product({ // Oculus Rift
        imagePath: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5989/5989502_rd.jpg',
        title: 'Oculus Rift with Touch Controllers',
        description: 'A robust, great value HMD with built-in headphones, mic, and a pair of 6DoF controllers for complete immersion.',
        price: 399
    }),
    new Product({ // HTC VIVE Pro
        imagePath: 'https://media.wired.com/photos/5af4e6e53733a15a44c5d038/master/w_2400,c_limit/HEADER-HTC-Vive-Pro-Full-Kit-SOURCE-HTC_topart.jpg',
        title: 'HTC VIVE Pro with Controllers',
        description: 'Unparalleled room-scale tracking, visual quality, and sound. HTC’s Pro-grade headset is the most immersive VR system out there!',
        price: 1399
    }),
    new Product({ //PSVR
        imagePath: 'https://h2savecom.files.wordpress.com/2017/12/playstation-vr-skyrim-bundle.jpg?w=1024&h=538',
        title: 'Sony PlayStation VR Skyrim Bundle',
        description: "Go all in with this PlayStation VR bundle. Compatible with PS4, the Full HD OLED headset comes with the Move motion controller and PlayStation camera to help fully unlock your system's VR capabilities. You'll also receive a copy of The Elder Scrolls V: Skyrim VR.",
        price: 329
    }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}