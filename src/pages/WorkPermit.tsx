import React, { useEffect, useState } from 'react';
import './WorkPermit.css';
import { getWorkPermit } from '../queries/getWorkPermit';
import { WorkPermit as IWorkPermit } from '../types';

const WorkPermit: React.FC = () => {
  const [workPermitData, setWorkPermitData] = useState<IWorkPermit | null>(null);

  useEffect(() => {
    async function fetchWorkPermitData() {
      const data = await getWorkPermit();
      setWorkPermitData(data);
    }
    fetchWorkPermitData();
  }, []);

  if (!workPermitData) return <div>Loading...</div>;

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          I'm currently on a <strong>PGWP (Post-Graduation Work Permit)</strong> 🛂, 
          which allows me to work in <strong>Canada 🇨🇦</strong>! 
          My visa is valid for <strong>3 years</strong> 📅, giving me the opportunity 
          to build valuable experience and grow my career here. 🌟
        </p>
        <p className="additional-info">
          📞 <strong>+1 (226) 829-6067</strong>
        </p>
      </div>
    </div>
  );
};

export default WorkPermit;
