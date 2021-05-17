const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

geoCode(address, (error, {lat, long} = {}) => {
    console.log(error)
    console.log(lat, long)
    if(error) {
        console.log(error)
    }
    else{

        forecast(lat, long, (farecast_error, farecast_data = {}) => {
            console.log(farecast_error)
            console.log(farecast_data)
            if(farecast_error) {
                console.log(farecast_error)
            }
            else{
                console.log(farecast_data)
            }
        })
    }
})





