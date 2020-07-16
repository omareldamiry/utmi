var Country ={
    name:[ 
        
        "Egypt",
        "Bangladesh", 
        "Australia",
           
    ],

    isCountry:(value) => { 
        for(let i=0;i<Country.name.length;i++){
            if(Country.name[i].localeCompare(value) == 0) 
                return true; 
        }

        return false;
    },
};
 



/**
 * Country#1
 *  University
 *  University
 *  University
 *  University
 * 
 * Country#2
 *  University
 *  University
 *  University
 */
