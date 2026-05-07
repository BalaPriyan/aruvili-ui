import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Stack, Grid, Box } from '@aruviliui/react';
import { BillingCard, ProfileCard, EventCard, FileTreeCard, PasswordCard } from '../components/BentoCards';

export default function Home() {
  return (
    <Box as="main" className="max-w-6xl mx-auto px-6 py-24">
      {/* Hero Section */}
      <Stack direction="row" justify="between" align="center" className="mb-12 flex-wrap md:flex-nowrap">
        <Stack gap={4} className="max-w-2xl">
          <Typography variant="h1" className="m-0 leading-[1.1]">
            Enterprise UI, <br/> Perfected.
          </Typography>
          <Typography variant="lead" className="max-w-xl m-0">
            Beautifully crafted, highly performant React components. Ready for your next dark-mode SaaS product.
          </Typography>
          <Stack direction="row" gap={4} className="mt-4">
            <Link to="/docs">
              <Button variant="primary" className="h-10 px-6 font-medium tracking-wide">Get Started</Button>
            </Link>
            <Button variant="secondary" className="h-10 px-6 font-medium tracking-wide">View Source</Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Bento Grid */}
      <Grid cols={3} gap={6} className="grid-cols-1 md:grid-cols-3">
        {/* Column 1 */}
        <Stack gap={6}>
          <BillingCard />
        </Stack>

        {/* Column 2 */}
        <Stack gap={6}>
          <ProfileCard />
          <EventCard />
        </Stack>

        {/* Column 3 */}
        <Stack gap={6}>
          <FileTreeCard />
          <PasswordCard />
        </Stack>
      </Grid>
    </Box>
  );
}

