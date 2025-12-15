
import React, { useState, useRef } from 'react';
import { CompanyDetail, FinancialDoc, DocType } from '../types';
import { FileText, MapPin, Building2, UserCheck, Lock, Plus, X, FileBarChart, FileSpreadsheet, Download, Upload, Trash2 } from 'lucide-react';

const details: CompanyDetail[] = [
  { label: 'Επωνυμία', value: 'ΣΟΥΠΕΡ ΜΑΡΚΕΤ ΦΙΛΙΑΤΡΩΝ Π.Γ. ΑΛΕΞΑΝΔΡΟΠΟΥΛΟΣ ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.' },
  { label: 'Διακριτικός Τίτλος', value: 'Super Market Filiatron' },
  { label: 'ΑΦΜ', value: '800458766' },
  { label: 'Αρ. ΓΕΜΗ', value: '123667045000' },
  { label: 'Νομική Μορφή', value: 'Μονοπρόσωπη Ιδιωτική Κεφαλαιουχική Εταιρεία (Ι.Κ.Ε.)' },
  { label: 'Ημερομηνία Ίδρυσης', value: '27 Δεκεμβρίου 2012' },
  { label: 'Νόμιμος Εκπρόσωπος', value: 'Παναγιώτης Γ. Αλεξανδρόπουλος' },
  { label: 'Έδρα', value: '1ο χλμ Ε.Ο. Φιλιατρών–Κυπαρισσίας, 24300, Φιλιατρά' },
];

const initialDocs: FinancialDoc[] = [
  // Example placeholder - in a real scenario this would be empty or fetched from a backend
  // { id: '1', year: '2023', type: 'balance', title: 'ΙΣΟΛΟΓΙΣΜΟΣ 2023', url: '#' },
];

export const LegalInfo: React.FC = () => {
  const [docs, setDocs] = useState<FinancialDoc[]>(initialDocs);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  
  // Form State
  const [newDocYear, setNewDocYear] = useState(new Date().getFullYear().toString());
  const [newDocType, setNewDocType] = useState<DocType>('balance');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'petridis') {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Λάθος κωδικός');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAddDoc = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Παρακαλώ επιλέξτε ένα αρχείο PDF ή εικόνας.");
      return;
    }

    // Create a fake URL for the uploaded file so it works in the browser session
    const objectUrl = URL.createObjectURL(selectedFile);

    const titleBase = newDocType === 'balance' ? 'ΙΣΟΛΟΓΙΣΜΟΣ' : 'ΑΠΟΤΕΛΕΣΜΑΤΑ ΧΡΗΣΗΣ';
    
    const newDoc: FinancialDoc = {
      id: Math.random().toString(36).substr(2, 9),
      year: newDocYear,
      type: newDocType,
      title: `${titleBase} ${newDocYear}`,
      url: objectUrl
    };

    // Add to top of list
    setDocs([newDoc, ...docs]);
    
    // Reset Form
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDeleteDoc = (id: string) => {
    if (window.confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το έγγραφο;')) {
      setDocs(docs.filter(doc => doc.id !== id));
    }
  };

  const balanceSheets = docs.filter(d => d.type === 'balance');
  const incomeStatements = docs.filter(d => d.type === 'income');

  return (
    <section id="legal" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative animate-in slide-in-from-bottom-4 duration-700">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Εταιρική Διαφάνεια</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Λειτουργούμε με πλήρη διαφάνεια και συμμόρφωση με το ελληνικό εταιρικό δίκαιο.
          </p>
          
          {/* Admin Trigger */}
          <button 
            onClick={() => isAdmin ? setIsAdmin(false) : setShowLogin(true)}
            className="absolute right-0 top-0 text-gray-300 hover:text-ab-red transition-colors p-2"
            title={isAdmin ? "Έξοδος Διαχειριστή" : "Είσοδος Διαχειριστή"}
          >
            {isAdmin ? <UserCheck size={20} /> : <Lock size={20} />}
          </button>
        </div>

        {/* --- OFFICIAL DETAILS GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <div className="bg-white p-8 shadow-sm border-t-4 border-ab-blue h-full animate-in slide-in-from-bottom-6 duration-700 delay-100">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-ab-blue" size={24} />
              <h3 className="font-serif text-2xl text-gray-900">Ταυτότητα Εταιρείας</h3>
            </div>
            <dl className="space-y-4">
              {details.slice(0, 5).map((detail) => (
                <div key={detail.label} className="border-b border-gray-100 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-wider text-gray-400 mb-1">{detail.label}</dt>
                  <dd className="text-gray-900 font-medium">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-white p-8 shadow-sm border-t-4 border-ab-red h-full animate-in slide-in-from-bottom-6 duration-700 delay-200">
              <div className="flex items-center gap-3 mb-6">
              <UserCheck className="text-ab-red" size={24} />
              <h3 className="font-serif text-2xl text-gray-900">Διοίκηση & Τοποθεσία</h3>
            </div>
            <dl className="space-y-4">
              {details.slice(5).map((detail) => (
                <div key={detail.label} className="border-b border-gray-100 pb-3 last:border-0">
                  <dt className="text-xs uppercase tracking-wider text-gray-400 mb-1">{detail.label}</dt>
                  <dd className="text-gray-900 font-medium">{detail.value}</dd>
                </div>
              ))}
              <div className="mt-6 pt-4">
                <div className="flex items-start space-x-2 text-gray-500 text-sm">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Φιλιατρά Μεσσηνίας, Ελλάδα.<br/>Δ.Ο.Υ. Καλαμάτας</span>
                </div>
                  <div className="flex items-start space-x-2 text-gray-500 text-sm mt-2">
                  <FileText size={16} className="mt-1 flex-shrink-0" />
                  <span>Διπλογραφικά Βιβλία (Κατηγορία Γ')</span>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* --- FINANCIAL STATEMENTS (GEMI STYLE) --- */}
        <div className="max-w-5xl mx-auto border-t border-gray-200 pt-16">
          <h3 className="font-serif text-4xl text-gray-900 mb-1">Δημοσιεύσεις Γ.Ε.ΜΗ.</h3>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-0.5 w-10 bg-ab-red"></div>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">Εταιρικη Διαφανεια & Οικονομικα Στοιχεια</span>
          </div>
          
          {/* Admin Add Panel */}
          {isAdmin && (
            <div className="mb-12 bg-gray-200 p-6 rounded-lg border border-gray-300 animate-pulse">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Plus size={20} /> Προσθήκη Νέας Δημοσίευσης
              </h4>
              <form onSubmit={handleAddDoc} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="w-full md:w-auto">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Έτος Χρήσης</label>
                  <input 
                    type="number" 
                    value={newDocYear}
                    onChange={e => setNewDocYear(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full md:w-32"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-xs font-bold text-gray-600 mb-1">Τύπος Εγγράφου</label>
                  <select 
                    value={newDocType}
                    onChange={e => setNewDocType(e.target.value as DocType)}
                    className="p-2 border border-gray-300 rounded w-full md:w-64"
                  >
                    <option value="balance">Ισολογισμός</option>
                    <option value="income">Αποτελέσματα Χρήσης</option>
                  </select>
                </div>
                <div className="w-full md:w-auto flex-grow">
                    <label className="block text-xs font-bold text-gray-600 mb-1">Αρχείο PDF/Εικόνα</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-ab-blue/10 file:text-ab-blue hover:file:bg-ab-blue/20"
                      />
                    </div>
                </div>
                <button type="submit" disabled={!selectedFile} className="bg-ab-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center">
                  <Upload size={16} /> Δημοσίευση
                </button>
              </form>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Balance Sheets Column */}
            <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <FileSpreadsheet className="text-ab-red" size={24} />
                <h4 className="font-serif text-xl text-gray-900 font-bold">Ισολογισμοί</h4>
              </div>
              <div className="space-y-3">
                {balanceSheets.map(doc => (
                  <div key={doc.id} className="flex items-center gap-2 group">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 rounded text-gray-600 hover:text-ab-blue">
                      <span className="text-sm font-medium">{doc.title}</span>
                      <Download size={16} className="text-gray-300 group-hover:text-ab-red" />
                    </a>
                    {isAdmin && (
                      <button 
                        onClick={() => handleDeleteDoc(doc.id)}
                        className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Διαγραφή"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
                {balanceSheets.length === 0 && <p className="text-sm text-gray-400 italic">Δεν υπάρχουν καταχωρημένοι ισολογισμοί.</p>}
              </div>
            </div>

            {/* Income Statements Column */}
            <div className="bg-white p-6 shadow-sm border border-gray-100 rounded-lg">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <FileBarChart className="text-ab-blue" size={24} />
                <h4 className="font-serif text-xl text-gray-900 font-bold">Αποτελέσματα Χρήσης</h4>
              </div>
              <div className="space-y-3">
                {incomeStatements.map(doc => (
                  <div key={doc.id} className="flex items-center gap-2 group">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 rounded text-gray-600 hover:text-ab-blue">
                      <span className="text-sm font-medium">{doc.title}</span>
                      <Download size={16} className="text-gray-300 group-hover:text-ab-red" />
                    </a>
                    {isAdmin && (
                      <button 
                        onClick={() => handleDeleteDoc(doc.id)}
                        className="p-3 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Διαγραφή"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}
                {incomeStatements.length === 0 && <p className="text-sm text-gray-400 italic">Δεν υπάρχουν καταχωρημένα αποτελέσματα.</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full relative animate-in zoom-in-95">
              <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
                <X size={20} />
              </button>
              <h3 className="font-serif text-xl mb-6 text-center font-bold">Είσοδος Διαχειριστή</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1">Κωδικός Πρόσβασης</label>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:border-ab-blue outline-none focus:ring-1 focus:ring-ab-blue"
                    placeholder="••••••••"
                  />
                </div>
                <button type="submit" className="w-full bg-ab-blue text-white py-2 rounded hover:bg-blue-700 transition-colors font-medium">
                  Είσοδος
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
