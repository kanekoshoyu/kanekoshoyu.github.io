import { useEffect, useState } from 'react';
import fetchAffiliatePrograms, { DIRECTUS_URL, type AffiliateProgramResponseData } from '../fetch/AffiliatePrograms';

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

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((partner) => (
                <div key={partner.id} className="card flex flex-col">
                    {partner.image && (
                        <img
                            src={`${DIRECTUS_URL}/assets/${partner.image}`}
                            alt={partner.name}
                            className="w-full h-40 object-cover"
                        />
                    )}
                    <div className="flex flex-col justify-between flex-1 p-4">
                        {/* Top section: name and summary */}
                        <div>
                            <h3 className="text-lg font-display font-semibold mb-2">{partner.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{partner.summary}</p>
                        </div>

                        {/* Bottom section: tags and button */}
                        <div>
                            <div className="flex flex-wrap gap-1 mb-4">
                                {partner.tags.map((tag) => (
                                    <span
                                        key={tag.tags_id.name}
                                        className="text-xs bg-secondary-100 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-100 px-2 py-1"
                                    >
                                        {tag.tags_id.name}
                                    </span>
                                ))}
                            </div>
                            <a href={partner.url} className="btn btn-secondary block w-full text-sm">
                                Referral Link
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}