async function usersort() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await response.json();

        const usercity = user.map(user => ({
            name: user.name,
            city: user.address.city
        }));

        usercity.sort((a,b) => a.city.localeCompare(b.city));
        console.log(usercity);
    } catch (error) {
        console.log("Gagal dalam pengambilan data",error.message);
    }
}

export default usersort;
