export function SessionCheck() {
    // Check if window object is defined (i.e., we're on the client-side)
    if (typeof window !== 'undefined') {
        // Check if email exists in localStorage
        const email = localStorage.getItem('email');
        
        // If no email found, redirect to sign-in page
        if (!email) {
            window.location.href = '/signin'; // Adjust the URL to match your sign-in page
            return null; // Return null if no email is found
        }
        
        // Return the email if it exists
        return true;
    }
    
    return null; // Return null if window object is not defined (e.g., on the server-side)
}
