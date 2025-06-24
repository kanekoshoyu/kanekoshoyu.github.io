import { useEffect, useState } from 'react';
import fetchAffiliatePrograms from '../fetch/AffiliatePrograms';
import { DIRECTUS_URL } from '../fetch/AffiliatePrograms';
import type { AffiliateProgramResponseData } from "../fetch/AffiliatePrograms";

export default function AffiliateGrid() {
    const [data, setData] = useState<AffiliateProgramResponseData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAffiliatePrograms()
            .then(setData)
            .catch((err) => console.error('Fetch failed', err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading partners...</p>;
    console.log("data:", data);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((partner) => (
                <div key={partner.id} className="card bg-white shadow rounded overflow-hidden">
                    {partner.image && (
                        <img
                            src={`${DIRECTUS_URL}/assets/${partner.image}`}
                            alt={partner.name}
                            className="w-full h-40 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{partner.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                        {/* TODO add section that informs the deal structure as from {partner.deal_description} */}
                        <div className="flex flex-wrap gap-1">
                            {partner.tags.map((tag) => (
                                <span key={tag.tags_id.name} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                    {tag.tags_id.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}