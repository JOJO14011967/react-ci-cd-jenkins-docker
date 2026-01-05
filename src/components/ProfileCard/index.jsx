import { useState, useEffect } from "react";
import Cookies from "js-cookie";// cookies import ki hai yaha pe 
import "./index.css";

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getProfileData = async () => {
      const apiUrl = "https://apis.ccbp.in/profile";  // Api fetch ki hai yaha pe maine 

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("myToken")}`, // if token needed  iski need hai nh yaha fir bhi maine lagya hai
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        if (response.ok) {
          const data = await response.json();

          // agar custom name or image jo bhi hame chahiye to uske liye ek variable banana padega update profile nam ka 
          // uske bad jo bhii hame update krna hai vo hm kr sakte hai yaha pe maine user ki  profile pic aur avtar ko update kiya hain
          const updatedProfile = {
            ...data.profile_details,
            name: "Pari Pipare",
            profile_image_url:
              "https://assets.ccbp.in/frontend/react-js/female-avatar-img.png",
          };

          setProfile(updatedProfile);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getProfileData();
  }, []);

  if (loading) {
    return <div className="profile-card"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="profile-card"><p>Failed to fetch profile details.</p></div>;
  }

  return (
   <div className="profile-card" style={{ background: "#fff", color: "#000", padding: "20px" }}>
  <img
    src={profile.profile_image_url}
    alt={profile.name}
    className="profile-image"
    style={{ width: "100px", borderRadius: "50%" }}
  />
  <h2 className="profile-name">{profile.name}</h2>
  <p className="profile-bio">{profile.short_bio}</p>
  <hr className="profile-divider" />
</div>

  );
};

export default ProfileCard;

