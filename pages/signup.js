import { useState } from "react";
import bcrypt from "bcryptjs";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    password: "",
    confirm: ""
  });

  const handleSubmit = async () => {
    if (form.password !== form.confirm) return alert("Passwords not matching");

    const hash = await bcrypt.hash(form.password, 10);

    localStorage.setItem("user", JSON.stringify({ ...form, password: hash }));

    router.push("/assessment");
  };

  return (
    <div className="container">
      <h2>Create Account</h2>

      <input placeholder="Full Name" onChange={e => setForm({...form,name:e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form,phone:e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form,email:e.target.value})} />

    <select onChange={e => setForm({ ...form, country: e.target.value })}>
  <option value="">Select Country</option>
  <option>Kenya</option>
  <option>Uganda</option>
  <option>Tanzania</option>
  <option>Rwanda</option>
  <option>Burundi</option>
  <option>South Sudan</option>
  <option>Ethiopia</option>
  <option>Somalia</option>
  <option>Nigeria</option>
  <option>Ghana</option>
  <option>South Africa</option>
  <option>Egypt</option>
  <option>Morocco</option>
  <option>Algeria</option>
  <option>Tunisia</option>
  <option>Zimbabwe</option>
  <option>Zambia</option>
  <option>Malawi</option>
  <option>Namibia</option>
  <option>Botswana</option>
  <option>Cameroon</option>
</select>

      <input type="password" placeholder="Password" onChange={e => setForm({...form,password:e.target.value})}/>
      <input type="password" placeholder="Confirm Password" onChange={e => setForm({...form,confirm:e.target.value})}/>

      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
}