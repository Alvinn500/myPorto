const Profile = () => {
  return (
    <div className="p-5">
      <img
        src="profile-img.jpg"
        alt="Profile-img"
        className="h-56 rounded-full mb-8 mx-auto"
      />
      <h2 className="text-center font-semibold text-3xl mb-6">
        Mochammad Alvin
      </h2>
      <div className="h-1 w-32 bg-slate-900 m-auto mb-6"></div>
      <p className="text-center text-xl text-slate-800">Frontend WebDev</p>
    </div>
  );
};

export default Profile;
