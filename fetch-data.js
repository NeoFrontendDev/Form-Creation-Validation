async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  dataContainer.innerHTML = "";
  
  try {
    const respone = await fetch(apiUrl);

    if (!response.ok) {
    throw new Error ("HTTP error! Status: ${response.status}");
    }
    const users = await response.json();
      console.log("Fetched users:", users);
    if (users.length > 0) {
      const userList = document.createElement("ul");
      dataContainer.textContent = "First user: ${users[0].name}";
      users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
    dataContainer.appendChild(userList);
    }
  } catch (error) {
    console.error("Error fetching data:",error);
    dataContainer.textContent = "Failed to load data.";
  }
}

