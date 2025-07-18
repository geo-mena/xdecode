import PageContainer from '@/components/layout/page-container';
import Detokenize from '@/features/detokenize';

export const metadata = {
    title: 'IDAPI - Detokenize Image'
};

export default function page() {
    return (
        <PageContainer scrollable={true}>
            <div className='mb-4 flex flex-1 flex-col space-y-4'>
                <Detokenize />
            </div>
        </PageContainer>
    );
}
