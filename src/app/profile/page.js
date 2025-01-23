import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const { email, family_name, given_name, id, picture } = user;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <h1 className="text-4xl pb-28 font-semibold text-center">
          Welcome {given_name}
        </h1>
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={picture}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {id}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {given_name} {family_name}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{email}</span>
              </p>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
