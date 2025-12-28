"use client";

import { createClient, updateClient } from "./action";
import { useState, useEffect } from "react";

type AdminFormProps = {
  clientToEdit?: any;
  onSuccess?: () => void;
};

export default function AdminForm({ clientToEdit, onSuccess }: AdminFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    mapUrl: "",
  });

  // Prefill when editing
  useEffect(() => {
    if (clientToEdit) {
      setFormData({
        name: clientToEdit.name || "",
        address: clientToEdit.address || "",
        phone: clientToEdit.phone || "",
        email: clientToEdit.email || "",
        mapUrl: clientToEdit.mapUrl || "",
      });
    }
  }, [clientToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([k, v]) => data.append(k, v as string));

    if (clientToEdit?. _id) {
      await updateClient(clientToEdit._id, data);
    } else {
      await createClient(data);
    }

    if (onSuccess) onSuccess();
    // Reset form after create
    if (!clientToEdit) setFormData({ name: "", address: "", phone: "", email: "", mapUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input name="name" label="Company Name" required value={formData.name} onChange={handleChange} />
        <Input name="phone" label="Phone" value={formData.phone} onChange={handleChange} />
        <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
        <Input name="mapUrl" label="Google Maps URL" value={formData.mapUrl} onChange={handleChange} />
      </div>
      <Input name="address" label="Address" full value={formData.address} onChange={handleChange} />

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-white px-6 py-2.5 text-black font-medium hover:bg-white/90"
        >
          {clientToEdit?._id ? "Update Partner" : "Create Partner"}
        </button>
      </div>
    </form>
  );
}

function Input({ label, name, type = "text", required = false, full = false, value, onChange }: any) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-medium uppercase text-white/50">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/30 focus:bg-white/10 outline-none"
      />
    </div>
  );
}
