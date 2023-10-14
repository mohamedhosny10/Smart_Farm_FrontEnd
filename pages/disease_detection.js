import DiseasesList from "../components/disease_detection/diseases_list";
import MainNavBar from "../components/navbar";

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};
function DiseaseDetection() {
    return (<>
        <div class="h-25 bg-success position-absolute w-100"></div>
        <MainNavBar></MainNavBar>
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <div class="card">
                        <div class="card-body ">

                            <input type="file" onChange={loadFile} class="pb-3 card-img-top" />
                            <div>
                                <img id="output" class="w-100 h-50" />
                                <button type="button" class="btn btn-lg btn-success btn-lg w-100 mt-4 mb-0">Start</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <DiseasesList></DiseasesList>    
                </div>
            </div>
        </div>
    </>)
}
export default DiseaseDetection;