import { submitFeedback } from "./actions";
import { feedbackData } from "./lib/data";

export default async function Home() {
  // Server Component → can access server data directly (SSR)
  const feedbackList = feedbackData;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-8">
      <h1 className="text-3xl font-bold mb-6">Feedback Form</h1>

      <form
        action={submitFeedback}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4 border border-gray-200"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-medium py-2 rounded hover:bg-indigo-700 transition"
        >
          Submit Feedback
        </button>
      </form>

      <div className="mt-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Recent Feedback</h2>
        {feedbackList.length === 0 ? (
          <p className="text-gray-500">No feedback yet.</p>
        ) : (
          <ul className="space-y-3">
            {feedbackList.map((fb) => (
              <li
                key={fb.id}
                className="p-4 bg-white border rounded shadow-sm"
              >
                <p className="font-semibold">{fb.name}</p>
                <p className="text-sm text-gray-500">{fb.email}</p>
                <p className="mt-1 text-gray-700">{fb.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
