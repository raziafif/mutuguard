"use client";

import { useState, useEffect } from "react";

interface DemoRequest {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  company_size: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [requests, setRequests] = useState<DemoRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/demo/requests")
      .then((res) => res.json())
      .then((data) => {
        setRequests(data.requests || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <header className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                MutuGuard
              </span>
            </a>
            <span className="text-sm text-muted bg-surface-alt px-2 py-0.5 rounded-md">
              Admin
            </span>
          </div>
          <a
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; Back to site
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Demo Requests
            </h1>
            <p className="text-sm text-muted mt-1">
              {requests.length} total request{requests.length !== 1 && "s"}
            </p>
          </div>
          <button
            onClick={() => {
              setLoading(true);
              fetch("/api/demo/requests")
                .then((res) => res.json())
                .then((data) => {
                  setRequests(data.requests || []);
                  setLoading(false);
                })
                .catch(() => setLoading(false));
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground bg-white border border-border rounded-lg hover:bg-surface-alt transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <svg className="animate-spin h-6 w-6 text-primary" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
        ) : requests.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-border">
            <div className="w-12 h-12 mx-auto mb-4 bg-surface-alt rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">
              No demo requests yet
            </h3>
            <p className="text-sm text-muted">
              Requests will appear here once visitors submit the demo form.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Name
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Company
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Email
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Phone
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Size
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Message
                    </th>
                    <th className="text-left px-6 py-3 font-medium text-muted">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr
                      key={req.id}
                      className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                        {req.name}
                      </td>
                      <td className="px-6 py-4 text-foreground whitespace-nowrap">
                        {req.company}
                      </td>
                      <td className="px-6 py-4 text-primary whitespace-nowrap">
                        {req.email}
                      </td>
                      <td className="px-6 py-4 text-muted whitespace-nowrap">
                        {req.phone || "—"}
                      </td>
                      <td className="px-6 py-4 text-muted whitespace-nowrap">
                        {req.company_size || "—"}
                      </td>
                      <td className="px-6 py-4 text-muted max-w-[200px] truncate">
                        {req.message || "—"}
                      </td>
                      <td className="px-6 py-4 text-muted whitespace-nowrap">
                        {req.created_at
                          ? new Date(req.created_at + "Z").toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
