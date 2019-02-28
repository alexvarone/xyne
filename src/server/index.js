const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

// set up express
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// logger
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));

// cloudinary.config({ // cloud storage configuration
//   cloud_name: 'xyne',
//   api_key: '148652863377463',
//   api_secret: 'a676b67565c6767a6767d6767f676fe1'
// });

// const storage = cloudinaryStorage({
//   cloudinary : cloudinary,
//   folder: 'demo',
//   allowedFormats: ['jpg', 'png'],
//   transformation: [{ width: 500, height: 500, crop: 'limit' }]
// });

// const parser = multer({ storage });

// app.post('/api/images', parser.single('image'), (req, res) => {
//   console.log(req.file); // to see what is returned to you
//   const image = {};
//   image.url = req.file.url;
//   image.id = req.file.public_id;
//   Image.create(image) // save image information in database
//     .then(newImage => res.json(newImage))
//     .catch(err => console.log(err));
// });

app.use(express.static('dist'));
app.listen(8080, () => console.log('Listening on port 8080!'));
