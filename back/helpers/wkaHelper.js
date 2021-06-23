const filterDataMethod = (data, requestParameters) => {
    return new Promise((resolve, reject) => {
        let vonDateParam = requestParameters.vonDateParam;
        let bisDateParam = requestParameters.bisDateParam;
        let inbetriebnParam = requestParameters.inbetriebnParam;
        let genehmigtParam = requestParameters.genehmigtParam;
        let filteredData;

        if(!vonDateParam || !bisDateParam) {
            bisDateParam = new Date().toISOString().slice(0, 10);
            vonDateParam = (parseInt(bisDateParam.substr(0, 4))-5) + bisDateParam.substr(4, 6);
            // vonDate from client 
            vonDateParam = vonDateParam.split('-');
            vonDateParam = new Date(vonDateParam[0],vonDateParam[1],vonDateParam[2]).getTime();
            // bisDate from client 
            bisDateParam = bisDateParam.split('-');
            bisDateParam = new Date(bisDateParam[0],bisDateParam[1],bisDateParam[2]).getTime();
        } else {
            bisDateParam = bisDateParam.split('-');
            bisDateParam = new Date(bisDateParam[0], bisDateParam[1], bisDateParam[2]).getTime();
            vonDateParam = vonDateParam.split('-');
            vonDateParam = new Date(vonDateParam[0], vonDateParam[1], vonDateParam[2]).getTime();

        }
        // if inbetriebnParam is true 
        if(inbetriebnParam) {
            let dateContainer ;
            let dateToBeTested ;
            filteredData = data.filter(elem => {
                if(elem.Inbetriebn) {
                    // date from db
                    dateContainer = elem.Inbetriebn.split('.');
                    dateToBeTested = new Date(dateContainer[2], dateContainer[1], dateContainer[0]).getTime();
                    // comparison
                    return (dateToBeTested >= vonDateParam && dateToBeTested <= bisDateParam)
                }
                return false
            });
        }
        // if genehmigtParam is true
        if(genehmigtParam) {
        let dateContainer ;
        let dateToBeTested ;
        filteredData = filteredData.filter(elem => {
            if(elem.Genehmigt) {
                // date from db
                dateContainer = elem.Genehmigt.split('.');
                dateToBeTested = new Date(dateContainer[2], dateContainer[1], dateContainer[0]).getTime();
                // comparison 
                return (dateToBeTested >= vonDateParam && dateToBeTested <= bisDateParam)
            }
            return false
        });
    }
        resolve(filteredData);
    });
}

module.exports = { filterDataMethod };