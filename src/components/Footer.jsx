import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground mb-4 block">
              QUANA
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6 text-sm">
              The future of personal AI. Create, customize, and share your unique digital identity with the world.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/developer" className="hover:text-foreground transition-colors">Developer (Bhaskar)</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/documentation" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="/help-center" className="hover:text-foreground transition-colors">Help Center</Link></li>
              <li><Link href="/community" className="hover:text-foreground transition-colors">Community</Link></li>
              <li><Link href="/api-status" className="hover:text-foreground transition-colors">API Status</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Quana AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
