export function formatDate(inputDate) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(inputDate);

    const month = months[date.getMonth()]; 
    const day = date.getDate(); 
    const year = date.getFullYear(); 

    // Format the date string
    return `${month} ${day}, ${year}`;
}

// Example usage:

