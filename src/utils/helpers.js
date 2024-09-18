export function formatCurrency(value){
    return new Intl.NumberFormat("en",{
        style:'currency',
        currency:'EUR',

    }).format(value)
}


export function formatDate(datestr){
    return new Intl.DateTimeFormat("en",{
        day:'numeric',
        month:'short',
        hour:'2-digit',
        minute:'2-digit'
    }).format(new Date(datestr))
}

export function calMinutesLeft(datestr) {
    if (!datestr) return 0; // If datestr is undefined or invalid
    const d1 = new Date().getTime(); // Current time
    const d2 = new Date(datestr).getTime(); // Order created time
  
    const differenceInMilliseconds = d2 + 30 * 60000 - d1; // 30 minutes countdown
    return Math.round(differenceInMilliseconds / 60000); // Return the difference in minutes
  }
  