'use client';

import { useState, useEffect } from 'react';

interface ApiResponse {
  status: string;
  message: string;
}

export default function ApiTest() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

  const fetchApiHealth = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${apiUrl}/api/health`);
      
      if (!response.ok) {
        throw new Error(`APIリクエストが失敗しました: ${response.status}`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '不明なエラーが発生しました');
      console.error('API接続エラー:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
      <div className="mb-4">
        <button
          onClick={fetchApiHealth}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'リクエスト中...' : 'APIヘルスチェック'}
        </button>
      </div>

      {error && (
        <div className="p-3 mb-4 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100 rounded-md">
          <h3 className="font-bold">エラー</h3>
          <p>{error}</p>
          <p className="text-sm mt-2">
            バックエンドが起動していることを確認してください:
            <code className="ml-2 p-1 bg-red-200 dark:bg-red-800 rounded">
              docker-compose up -d
            </code>
          </p>
        </div>
      )}

      {data && !error && (
        <div className="p-3 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100 rounded-md">
          <h3 className="font-bold">APIレスポンス</h3>
          <p className="mt-2"><span className="font-semibold">ステータス:</span> {data.status}</p>
          <p><span className="font-semibold">メッセージ:</span> {data.message}</p>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        <p>
          APIエンドポイント: <code className="p-1 bg-gray-200 dark:bg-gray-700 rounded">{apiUrl}/api/health</code>
        </p>
      </div>
    </div>
  );
} 