import { practices } from '@/mock/practice.mock';
import { tests } from '@/mock/test.mock';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import PartFour from './components/PartFour';
import PartFive from './components/PartFive';
import PartSix from './components/PartSix';
import PartSeven1 from './components/PartSeven1';
import PartSeven2 from './components/PartSeven2';
import PartSeven3 from './components/PartSeven3';

const PartDetailsPage = () => {
    const { id, partId, testId } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!id || !partId) return;

        const _dataPart = practices.find(t => t.slug === partId);

        const _data = tests.find(t => t.id === parseInt(id));

        if (!_data) {
            navigate(-1);
            return;
        }

        setData({ ..._data, part: _dataPart.part })
    }, [id, partId])

    const renderPart = useMemo(() => (part) => {
        // console.log({ part, testId });

        const parts = String(partId).split('-');
        const _partId = parts[parts.length - 1].slice(1, parts.length);
        console.log(_partId);

        switch (part >= 7 ? _partId : part) {
            case 1:
                return <PartOne id={testId} partId={id} />
            case 2:
                return <PartTwo id={testId} partId={id} />
            case 3:
                return <PartThree id={testId} partId={id} />
            case 4:
                return <PartFour id={testId} partId={id} />
            case 5:
                return <PartFive id={testId} partId={id} />
            case 6:
                return <PartSix id={testId} partId={id} />
            case "71":
                return <PartSeven1 id={testId} partId={_partId} />
            case "72":
                return <PartSeven2 id={testId} partId={_partId} />
            case "73":
                return <PartSeven3 id={testId} partId={_partId} />

            default:
                return 'Không tìm thấy...'
        }
    }, [testId, id, partId])


    return (
        <div>
            {data ? renderPart(data?.part || 1) : 'Loading...'}
        </div>
    )
}

export default PartDetailsPage