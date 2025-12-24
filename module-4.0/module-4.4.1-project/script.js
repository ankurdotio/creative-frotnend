const userData = [
    {
        id: 1,
        fullName: "Aarav Sharma",
        role: "Frontend Developer",
        bio: "Pixel perfectionist who loves React and coffee. ☕",
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
        salary: 85000,
        experience: 4, // Years
        isActive: true,
        department: "Engineering"
    },
    {
        id: 2,
        fullName: "Priya Patel",
        role: "UI/UX Designer",
        bio: "Designing interfaces that humans actually love using.",
        profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
        salary: 95000,
        experience: 6,
        isActive: true,
        department: "Design"
    },
    {
        id: 3,
        fullName: "John Smith",
        role: "Project Manager",
        bio: "Keeping the chaos organized. Agile enthusiast.",
        profileImage: "https://randomuser.me/api/portraits/men/86.jpg",
        salary: 110000,
        experience: 10,
        isActive: false, // Inactive (on leave?)
        department: "Management"
    },
    {
        id: 4,
        fullName: "Sarah Lee",
        role: "Backend Developer",
        bio: "I speak API, database, and scalability.",
        profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
        salary: 92000,
        experience: 3,
        isActive: true,
        department: "Engineering"
    },
    {
        id: 5,
        fullName: "Vikram Singh",
        role: "DevOps Engineer",
        bio: "Automating everything so I can sleep better.",
        profileImage: "https://randomuser.me/api/portraits/men/11.jpg",
        salary: 105000,
        experience: 7,
        isActive: true,
        department: "Operations"
    },
    {
        id: 6,
        fullName: "Emily Chen",
        role: "Intern",
        bio: "Learning something new every single day!",
        profileImage: "https://randomuser.me/api/portraits/women/22.jpg",
        salary: 40000,
        experience: 1,
        isActive: true,
        department: "Engineering"
    },
    {
        id: 7,
        fullName: "Michael Brown",
        role: "CTO",
        bio: "Building the future of tech, one block at a time.",
        profileImage: "https://randomuser.me/api/portraits/men/54.jpg",
        salary: 250000,
        experience: 18,
        isActive: true,
        department: "Management"
    },
    {
        id: 8,
        fullName: "Lisa Wang",
        role: "Frontend Developer",
        bio: "GSAP wizard and animation lover.",
        profileImage: "https://randomuser.me/api/portraits/women/33.jpg",
        salary: 88000,
        experience: 5,
        isActive: false, // Inactive
        department: "Engineering"
    }
];

const usersElement = document.querySelector(".users")
const searchUserNameElement = document.querySelector("#search-user-name")
const departmentElement = document.querySelector("#department")

let username = ""
let department = "All"


function renderUserData(userData) {
    usersElement.innerHTML = userData.map((user) => {
        return `<div class="user-card">

                <div class="status ${user.isActive ? "active" : "inactive"}">${user.isActive ? "ACTIVE" : "INACTIVE"}</div>
                
                <div class="profile-img">
                    <img src="${user.profileImage}" alt="">
                </div>

                <h1 class="user-name" >${user.fullName}</h1>
                <h2 class="role">${user.role}</h2>

                <p class="bio" >${user.bio}</p>

                <div class="text-box">
                    <div class="exp">
                        Exp : <br>
                        <span class="exp-value" >${user.experience} Yrs</span>
                    </div>
                    <div class="dept">
                        Dept : <br>
                        <span class="dept-value">
                            ${user.department}
                        </span>
                    </div>
                </div>
            </div>`
    }).join("")
}

renderUserData(userData)


searchUserNameElement.addEventListener("input", (e) => {

    username = searchUserNameElement.value

    const data = userData.filter((user) => {
        return user.fullName.toLocaleLowerCase().includes(username.toLocaleLowerCase())
    }).filter((user) => {
        return user.department == department
    })

    renderUserData(data)

})

departmentElement.addEventListener("change", (e) => {
    department = departmentElement.value

    if (department == "All") {
        renderUserData(userData)
        return
    }

    const data = userData.filter((user) => {
        return user.department == department
    }).filter((user) => {
        return user.fullName.toLocaleLowerCase().includes(username.toLocaleLowerCase())
    })

    renderUserData(data)

})
