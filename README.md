This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Follow the steps below to set up and run the IPL T20 Dashboard project locally.

1. Clone the Repository
bash
Copy
Edit
git clone [https://github.com/your-username/ipl-t20-dashboard.git](https://github.com/YatiVijay/IPL-T20_dashboard.git)
cd ipl-t20-dashboard

2. Install Dependencies
Ensure you have Node.js (v18 or later) and npm or yarn installed. Then run:

bash
Copy
Edit
npm install
# or
yarn install

3. Start the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Project Structure
php
Copy
Edit
.
├── app/                      # Next.js app directory
│   ├── components/           # Reusable components like LiveMatch, PointsTable, etc.
│   ├── api/                  # API routes (matches, points, schedule)
│   └── page.tsx              # Home page rendering components
├── public/                   # Static assets
├── styles/                  # Global styles (e.g., globals.css)
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project metadata and dependencies

5. Customization
Data is fetched from internal API routes (/api/matches, /api/points, /api/schedule).

You can configure the scraping or static data logic inside the respective files in app/api/.

6. Build for Production
bash
Copy
Edit
npm run build
npm start
