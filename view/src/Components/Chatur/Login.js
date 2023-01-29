import React, { useEffect, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiVault } from "react-icons/si";
import { GiBarbedSpear } from "react-icons/gi";
import { GiChessRook } from "react-icons/gi";
import { GiMonkey } from "react-icons/gi";
import { useQuery } from "react-query";
import useNFTityStore from "../../store";
import { useNavigate } from "react-router";

const handleLogin = async ( email, password ) => {
	const data = await fetch("http://localhost:5001/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({email, password}),
	}).then(res => res.json());

	return data;
}

const Login = () => {
  // const [close, setClose] = useState(1);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, logout] = useNFTityStore((state) => [state.login, state.logout]);
  const navigate = useNavigate();

  const {data: loginData, refetch} = useQuery(["login", email, password], () => handleLogin(email, password), {
		enabled: false,
	});

	useEffect(() => {
		if (loginData?.error) {
			console.log(loginData.data);
			logout();
		} else if (loginData?.data) {
			login(loginData.data.token, loginData.data.admin);
      // TODO: redirect to Dashboard
      if (loginData.data.admin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
		}
	}, [loginData, login, logout, navigate]);

  return /* !close ? */ (
    <form className=" relative flex flex-col justify-around items-center h-1/2 w-full px-40 py-24 rounded-lg bg-gradient-to-b from-blue-200 to-purple-300 ">
      {/* <div className="absolute top-0 right-0 ">
        <button
          className="pr-1 pt-0 text-lg font-semibold"
          onClick={(e) => {
            e.preventDefault();
            setClose(1);
          }}
        >
          x
        </button>
      </div> */}

      {/* <SiVault size={100} className="m-2 text-purple-800"/> */}
      <GiBarbedSpear size={100} className="mb-2 text-purple-800" />
      {/* <GiChessRook size={100} className="m-2 text-purple-800"/>  */}
      {/* <GiMonkey size={100} className="m-2 text-purple-800"/>  */}
      <div className="text-2xl font-semibold m-6">Please Login To Continue</div>
      <div className="flex flex-col justify-evenly items-center h-60 w-full bg-gray-100 p-4 rounded-lg border-4 border-black">
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <MdAlternateEmail size={25} />
          <input
            type="text"
            name="name"
            placeholder="Email"
            className="w-full mx-2 "
						onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="border-2 border-black rounded-lg flex justify-left w-full text-gray-600 bg-white ">
          <RiLockPasswordLine size={25} />
          <input
            type="password"
            name="name"
            placeholder="Password"
            className="w-full mx-2 "
						onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {loginData?.data.errors?
            <div className="text-red-500 font-semibold">{loginData.data.errors.email || loginData.data.errors.password}</div>: null}
      </div>

      <button className="bg-violet-700 text-white border-2 w-full rounded-lg border-black p-1 mt-4" onClick={(e) => {
				e.preventDefault();
				refetch()
			}}>
        Sign in
      </button>
    </form>
  /* ) : (
    <button
      className="font-bold"
      onClick={(e) => {
        e.preventDefault();
        setClose(0);
      }}
    >
      Login
    </button> */
  );
};

export default Login;
