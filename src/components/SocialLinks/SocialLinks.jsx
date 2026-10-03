import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import { socialLinks } from '../../data/socialLinks';
import './SocialLinks.css';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail,
  Phone: Phone,
  MessageSquare: MessageSquare
};

export default function SocialLinks({ variant = 'default', showLabels = false, className = '' }) {
  return (
    <div className={`social-links-wrapper social-${variant} ${className}`.trim()}>
      {socialLinks.map((item) => {
        const IconComponent = iconMap[item.iconName] || Mail;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.url.startsWith('http') ? '_blank' : undefined}
            rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="social-link-item"
            aria-label={`${item.name}: ${item.label}`}
          >
            <span className="social-icon-wrapper">
              <IconComponent size={18} />
            </span>
            {showLabels && <span className="social-label">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
