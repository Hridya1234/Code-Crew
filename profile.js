window.addEventListener('load', () => {
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('pop');
        }, index * 200); // Delay each profile card's appearance
    });
});
const profiles = [
    { name: 'John Doe', age: 28, place: 'New York, NY', gender: 'male', experience: '5 years', salary: '$80,000', avatar: '' },
    { name: 'Jane Smith', age: 32, place: 'Los Angeles, CA', gender: 'female', experience: '8 years', salary: '$95,000', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'Mike Johnson', age: 40, place: 'Chicago, IL', gender: 'male', experience: '12 years', salary: '$120,000', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Sarah Lee', age: 25, place: 'Miami, FL', gender: 'female', experience: '3 years', salary: '$70,000', avatar: '' },
    { name: 'Emily Clark', age: 29, place: 'Austin, TX', gender: 'female', experience: '6 years', salary: '$85,000', avatar: 'https://randomuser.me/api/portraits/women/25.jpg' },
    { name: 'David Brown', age: 35, place: 'Seattle, WA', gender: 'male', experience: '10 years', salary: '$110,000', avatar: '' },
    { name: 'Amy White', age: 24, place: 'San Francisco, CA', gender: 'female', experience: '2 years', salary: '$65,000', avatar: 'https://randomuser.me/api/portraits/women/51.jpg' },
    { name: 'James Green-', age: 45, place: 'Boston, MA', gender: 'male', experience: '18 years', salary: '$150,000', avatar: '' },
    { name: 'Olivia Adams', age: 38, place: 'Denver, CO', gender: 'female', experience: '14 years', salary: '$130,000', avatar: 'https://randomuser.me/api/portraits/women/30.jpg' },
    { name: 'Daniel Evans', age: 27, place: 'Houston, TX', gender: 'male', experience: '4 years', salary: '$75,000', avatar: '' },
];
function displayProfiles(filteredProfiles) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = ''; // Clear previous profiles

    filteredProfiles.forEach(profile => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card', 'pop');

        // const profileAvatar = profile.avatar 
        //     ? <img src="${profile.avatar}" alt="${profile.name}'s Avatar" class="profile-avatar">
        //     : <div class="profile-avatar">${profile.name.charAt(0)}</div>;

        profileCard.innerHTML = `
            ${profileAvatar}
            <h3>${profile.name}</h3>
            <p><strong>Age:</strong> ${profile.age}</p>
            <p><strong>Place:</strong> ${profile.place}</p>
            <p><strong>Experience:</strong> ${profile.experience}</p>
            <p><strong>Expected Salary:</strong> ${profile.salary}</p>
        `;
        profileContainer.appendChild(profileCard);
    });
}

document.getElementById('filter-form').addEventListener('change', function () {
    const placeFilter = document.getElementById('place-filter').value;
    const genderFilter = document.querySelector('input[name="gender"]:checked').value;

    // First, filter the profiles by the selected place and gender
    let filteredProfiles = profiles.filter(profile => {
        const matchesPlace = placeFilter === '' || profile.place === placeFilter;
        const matchesGender = genderFilter === '' || profile.gender === genderFilter;
        return matchesPlace && matchesGender;
    });

    // If a place is selected, prioritize profiles from that place
    if (placeFilter !== '') {
        filteredProfiles = filteredProfiles.sort((a, b) => {
            if (a.place === placeFilter && b.place !== placeFilter) return -1;
            if (a.place !== placeFilter && b.place === placeFilter) return 1;
            return 0;
        });
    }

    displayProfiles(filteredProfiles);
});

// Initial display of all profiles
displayProfiles(profiles);



// Initial display of all profiles
displayProfiles(profiles);
// Function to display the success message when the button is clicked
function showBookingSuccess() {
    alert("Booking Successful! Thank you!");
}

// Add event listener for 'Book Now' buttons in each profile
document.addEventListener('DOMContentLoaded', () => {
    const bookNowButtons = document.querySelectorAll('.book-now-button');
    bookNowButtons.forEach(button => {
        button.addEventListener('click', showBookingSuccess);
    });
});
