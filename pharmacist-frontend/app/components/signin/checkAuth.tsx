export default async function CheckAuth(email:string, pass:string) {
    try {
        const response = await fetch('pharmacist.json');
        const users = await response.json();

        // Iterate through the users to find a match
        const authenticatedUser = users.find(user => user.email === email && user.password === pass);

        if (authenticatedUser) {
            console.log("User authenticated successfully!");
            // Perform actions for authenticated user
            return authenticatedUser.email; // Return the authenticated user's email
        } else {
            console.log("Authentication failed. Invalid email or password.");
            // Perform actions for failed authentication
            return null; // Return null if authentication fails
        }
    } catch (error) {
        console.error("Error fetching or parsing data:", error);
        // Perform actions for error handling
        return null; // Return null if an error occurs
    }
}
