/** Easy ROI Calculator*/

calculateROIBtn = document.getElementById('calculate-roi')


        calculateROIBtn.addEventListener('click', calculateROI)

        function calculateROI(e) {

            e.preventDefault()
            numberOfStores = Number(document.getElementById('number_stores').value)
            numberOfAssociates = Number(document.getElementById('number_associates').value)
            numberOfReps = Number(document.getElementById('number_reps').value)
            visitsPerYear = Number(document.getElementById('visits_per_year').value)
            staffPerVisit = Number(document.getElementById('staff_per_visit').value)
            avgProductPrice = Number(document.getElementById('avg_product_price').value)
        

    /* Handy Stuff */
    const totalNumberOfAssociates = numberOfStores * numberOfAssociates;
    const storesPerFieldRep = numberOfStores / numberOfReps;
    const associatesPerRep = totalNumberOfAssociates / numberOfReps;
    const totalCoverageOfReps = numberOfReps * visitsPerYear * staffPerVisit;

    /* Results */ 
    const reach = (totalCoverageOfReps / totalNumberOfAssociates) * 100;
    const extraRepsNeeded = (numberOfStores - (numberOfReps * visitsPerYear))/visitsPerYear 
    const extraRevenue = (totalNumberOfAssociates / 2) * avgProductPrice * 12

    showResults(reach, extraRepsNeeded, extraRevenue)

}

function showResults(reach, extraRepsNeeded, extraRevenue){



    resultsDiv = document.getElementById('right-col-form-section')
    resultsDiv.classList.remove('invisible')
    resultsDiv.classList.add('visible')
    reachPercentageOutput = document.getElementById('reach-percentage-output');
    extraRepsNeededOutput = document.getElementById('extra-reps-needed-output');
    extraRevenueOutput = document.getElementById('extra-revenue-output');

    extraRepsNeededOutput.innerText = Math.round(extraRepsNeeded);
    reachPercentageOutput.innerText = Math.round(reach) + '%';
    extraRevenueOutput.innerText = Math.round(extraRevenue);

}
