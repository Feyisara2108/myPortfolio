import { profileData } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 md:px-8 py-8 mt-auto">
      <p className="max-w-5xl mx-auto text-center text-sm text-textMuted">
        © {new Date().getFullYear()} {profileData.name}
      </p>
    </footer>
  );
}
