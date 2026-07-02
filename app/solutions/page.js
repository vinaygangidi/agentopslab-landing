import { redirect } from 'next/navigation';

// The agent catalog now lives on the homepage. Keep /solutions as a permanent
// redirect so any existing links continue to work.
export default function SolutionsPage() {
  redirect('/');
}
