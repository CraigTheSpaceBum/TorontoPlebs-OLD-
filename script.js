body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
}

h1 {
    font-size: 2.5rem;
    margin: 0;
}

nav {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

button {
    background-color: #555;
    color: #fff;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
}

button:hover {
    background-color: #777;
}

main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
}

.dropdown {
    display: inline-block;
}

.dropbtn {
    background-color: #555;
    color: #fff;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
}

.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #555; /* Change this to desired background color */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content button {
    display: block;
    width: 100%;
    padding: 10px;
    text-align: left;
    color: #fff;
    border: none;
    background-color: #555;
}

.dropdown-content button:hover {
    background-color: #777;
}
