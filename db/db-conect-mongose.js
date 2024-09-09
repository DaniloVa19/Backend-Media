const mongoose = require('mongoose');

const getConection = async () => {

    try {

        const url = 'mongodb+srv://danilovalderramaaa:y527jNU391ps2sys@cluster0.41dbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

        await mongoose.connect(url);
        console.log('conexión exitosa');

    } catch (error) {
        console.log(error);
        
    }
    
}

module.exports = {
    getConection
}

