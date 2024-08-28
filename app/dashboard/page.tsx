'use client'; 

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
   
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {

      router.push('/auth/login');
    } else {

      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  if (!user) {

    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <div>
        <p><strong>Wallet Address:</strong> {user.walletAddress}</p>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Amount:</strong> {user.amount}</p>
      </div>
    </div>
  );
};

export default Dashboard;
