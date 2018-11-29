const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mini_blog');
mongoose.connection
            .once('open', () => console.log('Conectou MongoDB'))
            .on('error', (error) => {
                console.log('Warning', error);
            })