import Link from "next/link";
import { LayoutGrid, Lock, FileText, Settings, Users, LogOut, Wallet, Trophy, Bell, HelpCircle, Award, Target } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import NotificationDropdown from "@/components/layout/NotificationDropdown";
import OnboardingModal from "@/components/modals/OnboardingModal";
import DashboardHeaderSearch from "@/components/layout/DashboardHeaderSearch";
import ThemeToggle from "@/components/ui/ThemeToggle";
import InstallPWAButton from "@/components/ui/InstallPWAButton";
import FeatureSpotlight from "@/components/ui/FeatureSpotlight";
import FeedbackWidget from "@/components/ui/FeedbackWidget";
import ShortcutsModal from "@/components/ui/ShortcutsModal";
import EmailVerificationBanner from "@/components/settings/EmailVerificationBanner";
import { ConnectionStatusProvider } from "@/contexts/ConnectionStatusContext";
import ConnectionStatusIndicator from "@/components/ui/ConnectionStatusIndicator";
import StaleDataBanner from "@/components/ui/StaleDataBanner";
import NetworkGuard from "@/components/wallet/NetworkGuard";
import TrustlineBanner from "@/components/wallet/TrustlineBanner";

const WALLET_ADDRESS = "0x23g43gdaa8f2c5b1e9d0f7a34bc6e12d8a9f5c3b";
const WALLET_DISPLAY = "0x23g43gdaa...";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-[var(--surface)] focus:px-4 focus:py-2 focus:text-[var(--text)] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#4B6B76]"
      >
        Skip to main content
      </a>
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex print:hidden w-[260px] flex-col border-r border-[var(--ov-0f)] bg-[var(--surface)]">
        <div className="p-8 flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center" aria-hidden="true">
              <span className="font-bold text-sm">$</span>
            </div>

          {/* Navigation */}
          <nav aria-label="Dashboard navigation">
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link
                  href="/dashboard"
                  aria-current="page"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--text)] bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <LayoutGrid size={20} className="text-[var(--text)]" aria-hidden="true" />
                  <span className="font-medium">Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/circles"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <Users size={20} aria-hidden="true" />
                  <span className="font-medium">Circles</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/locked-funds"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <Lock size={20} aria-hidden="true" />
                  <span className="font-medium">Locked Funds</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/payouts"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <Wallet size={20} aria-hidden="true" />
                  <span className="font-medium">Payouts</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/contributions"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <FileText size={20} aria-hidden="true" />
                  <span className="font-medium">Contributions</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/statements"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <FileText size={20} aria-hidden="true" />
                  <span className="font-medium">Statements</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/goals"
                  className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                >
                  <Target size={20} aria-hidden="true" />
                  <span className="font-medium">Goals</span>
                </Link>
              </li>
              <li>
                <FeatureSpotlight featureId="multi-wallet" align="left">
                  <Link
                    href="/dashboard/circles"
                    className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                  >
                    <Users size={20} aria-hidden="true" />
                    <span className="font-medium">Circles</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/locked-funds"
                    className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                  >
                    <Lock size={20} aria-hidden="true" />
                    <span className="font-medium">Locked Funds</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/payouts"
                    className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B6B76]"
                  >
                    <Wallet size={20} aria-hidden="true" />
                    <span className="font-medium">Payouts</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/contributions"
                    className="flex items-center gap-3 px-4 py-3 text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--ov-0a)] rounded-lg transition-colors border-l-2 border-transparent focus-visible:outline-none