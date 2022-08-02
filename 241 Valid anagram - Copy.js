/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    let sHashMap = {};
    let tHashMap = {};
    
    for(let i=0;i<s.length;i++){
        if(sHashMap.hasOwnProperty(s[i])){
            sHashMap[s[i]]++;
        }
        else sHashMap[s[i]] = 1;
        
        if(tHashMap.hasOwnProperty(t[i])){
            tHashMap[t[i]]++;
        }
        else tHashMap[t[i]] = 1;
    }
    
    console.log(sHashMap)
        console.log(tHashMap)
    
     for (let k in sHashMap) {
        if (sHashMap[k] !== tHashMap[k]) {
            return false;
        }
    }
    
    return true;

};