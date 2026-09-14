import React from "react";
import { siteConfig } from "@/lib/site-config";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
      <p className="text-neutral-400">
        Available for freelance projects, cloud architecture consultations, and engineering roles.
      </p>
      <div className="text-sm text-neutral-300">
        <p>Email: {siteConfig.author.email}</p>
      </div>
    </div>
  );
};
