"""empty message

Revision ID: f66d0205ad9f
Revises: c7f0accd2335
Create Date: 2022-01-10 10:49:37.572560

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f66d0205ad9f'
down_revision = 'c7f0accd2335'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('supplier_address_key', 'supplier', type_='unique')
    op.drop_constraint('supplier_phoneNumber_key', 'supplier', type_='unique')
    op.drop_constraint('supplier_postalCode_key', 'supplier', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('supplier_postalCode_key', 'supplier', ['postalCode'])
    op.create_unique_constraint('supplier_phoneNumber_key', 'supplier', ['phoneNumber'])
    op.create_unique_constraint('supplier_address_key', 'supplier', ['address'])
    # ### end Alembic commands ###