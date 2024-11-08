 'use client'

import { useEffect, useState } from 'react'

interface TokenData {
  price: number;
  totalSupply?: number;
  volume24h?: number;
}

export function TokenData() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://public-api.birdeye.so/public/token_price?address=CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9',
          {
            headers: {
              'X-API-KEY': 'aeca3fb262a9415abe1930ff9aa5f3f3'
            }
          }
        );
        const data = await response.json();
        setTokenData({
          price: data.data.value,
          volume24h: data.data.volume24h
        });
      } catch (error) {
        console.error('Error fetching token data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!tokenData) return <div>Error loading token data</div>;

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/60 border border-teal-200">
      <div className="text-teal-600">
        <span className="font-bold">Price: </span>
        ${tokenData.price.toFixed(8)}
      </div>
      {tokenData.volume24h && (
        <div className="text-teal-600">
          <span className="font-bold">24h Volume: </span>
          ${tokenData.volume24h.toLocaleString()}
        </div>
      )}
    </div>
  );
}