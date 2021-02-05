import { Internship } from "./Internship"
import { Student } from "./Student"

export class CustomizedMap {
private googleMap: google.maps.Map

    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom:1.5,
            center: {
                lat:0,
                lng:0,
            }
        })
    }
    
    addStudentMarker(student: Student) {
        const marker = new google.maps.Marker ({
        map: this.googleMap,
        position: {
            lat:student.location.latitude,
            lng:student.location.longitude,
            },
        })
        const infowindow = new google.maps.InfoWindow({
            content: "Adam Siyala",
          });
        
        marker.addListener("click", () =>{
            infowindow.open(this.googleMap,marker)
        })
    }
    addInternshipMarker(internship: Internship) {
        const marker = new google.maps.Marker ({
        map: this.googleMap,
        position: {
            lat:internship.location.latitude,
            lng:internship.location.longitude,
            },
        })
        const infowindow = new google.maps.InfoWindow({
            content: "Welcome to Armaan's Internship",
          });
        marker.addListener("click" , ()=> {
            infowindow.open(this.googleMap,marker)
        })
    }
}