"""empty message

Revision ID: a247a996d17c
Revises: 2fd81eaee278
Create Date: 2022-06-22 09:05:24.775885

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a247a996d17c'
down_revision = '2fd81eaee278'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password', sa.String(length=250), nullable=False))
    op.drop_column('user', 'password_hash')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('password_hash', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
    op.drop_column('user', 'password')
    # ### end Alembic commands ###
