'use client';

import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';
import { AppWindow, ChartNoAxesColumnIncreasing, Files, House, Images, MessageCircleWarning, Users } from 'lucide-react';
import * as React from 'react';
import AppLogo from './app-logo';
import { NavInfografis } from './nav-infografis';
import { NavPenduduk } from './nav-penduduk';
import { NavSurat } from './nav-surat';

// This is sample data.
const data = {
    navDashboard: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: House,
        },
    ],
    navSurat: [
        {
            title: 'Surat',
            url: '#',
            icon: Files,
            items: [
                {
                    title: 'SK Pindah',
                    url: '#',
                },
                {
                    title: 'SK Domisili',
                    url: '#',
                },
                {
                    title: 'SK Kematian',
                    url: '#',
                },
                {
                    title: 'SK Usaha',
                    url: '#',
                },
                {
                    title: 'SK Tidak Mampu',
                    url: '#',
                },
                {
                    title: 'SK Kehilangan KTP',
                    url: '#',
                },
                {
                    title: 'SK Kehilangan KK',
                    url: '#',
                },
                {
                    title: 'SK Umum',
                    url: '#',
                },
            ],
        },
    ],
    navProfil: [
        {
            title: 'Profil Desa',
            url: '#',
            icon: AppWindow,
        },
    ],
    navArtikel: [
        {
            title: 'Artikel Desa',
            url: '#',
            icon: Images,
        },
    ],
    navInfografis: [
        {
            title: 'Infografis Desa',
            url: '#',
            icon: ChartNoAxesColumnIncreasing,
            items: [
                {
                    title: 'Pendapatan Desa',
                    url: '#',
                },
                {
                    title: 'Belanja Desa',
                    url: '#',
                },
                {
                    title: 'Peta Fasilitas',
                    url: '#',
                },
            ],
        },
    ],
    navPenduduk: [
        {
            title: 'Penduduk',
            url: '#',
            icon: Users,
            items: [
                {
                    title: 'Data KTP',
                    url: '#',
                },
                {
                    title: 'Data KK',
                    url: '#',
                },
            ],
        },
    ],
    navPengaduan: [
        {
            title: 'Pengaduan Warga',
            url: '#',
            icon: MessageCircleWarning,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {data.navDashboard.map((data) => (
                        <SidebarMenuItem key={data.title}>
                            <SidebarMenuButton asChild>
                                <a href={data.url}>
                                    <data.icon />
                                    <span>{data.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <NavSurat items={data.navSurat} />
                    {data.navProfil.map((data) => (
                        <SidebarMenuItem key={data.title}>
                            <SidebarMenuButton asChild>
                                <a href={data.url}>
                                    <data.icon />
                                    <span>{data.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <NavPenduduk items={data.navPenduduk} />
                    {data.navArtikel.map((data) => (
                        <SidebarMenuItem key={data.title}>
                            <SidebarMenuButton asChild>
                                <a href={data.url}>
                                    <data.icon />
                                    <span>{data.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    <NavInfografis items={data.navInfografis} />
                    {data.navPengaduan.map((data) => (
                        <SidebarMenuItem key={data.title}>
                            <SidebarMenuButton asChild>
                                <a href={data.url}>
                                    <data.icon />
                                    <span>{data.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
